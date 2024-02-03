package br.com.notiworks.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.notiworks.configs.security.UsuarioLogado;
import br.com.notiworks.dao.config.ConnectionDB;
import br.com.notiworks.dto.DirectoryDTO;
import br.com.notiworks.dto.NotasDTO;

@Component
public class NotasDAO {

	@Autowired
	private ConnectionDB connectionDB;
	
	@Autowired
	private UsuarioLogado usuarioLogado;
	
	public List<NotasDTO> findNotasByUserWithOutDirectory(){
		
		try {
			Connection con = connectionDB.getConnection();
			
			StringBuilder sql= new StringBuilder();
			
			sql.append("select n.id, n.titulo_nota, n.data_atualizacao " );
			sql.append("from tbnotas n " );
			sql.append("left join tbdirectoryxnotas dn on n.id = dn.id_nota " );
			sql.append("inner join tbnotasxuser nu on nu.id_nota = n.id " );
			sql.append("inner join tbuser u on u.id = nu.id_user " );
			sql.append("where u.id = ? and dn.id_nota is null  order by n.data_atualizacao desc" );
			
			PreparedStatement stm = con.prepareStatement(sql.toString());
			stm.setLong(1, usuarioLogado.getId());
			
			ResultSet rs = stm.executeQuery();
			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			List<NotasDTO> listDTO = new ArrayList<NotasDTO>();
			while(rs.next()) {
				NotasDTO notas = new NotasDTO();
				Date date = new Date(rs.getTimestamp("data_atualizacao").getTime());
				notas.setId(rs.getLong("id"));
				notas.setNome(rs.getString("titulo_nota"));
				notas.setDtAtualizacao(formato.format(date));
				listDTO.add(notas);
			}
			return listDTO;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<NotasDTO> findNotasByUserWithDirectory(Long directoryFatherId) {
		try {
			Connection con = connectionDB.getConnection();
			
			StringBuilder sql= new StringBuilder();
			
			sql.append("select n.id, n.titulo_nota, n.data_atualizacao " );
			sql.append("from tbnotas n " );
			sql.append("inner join tbdirectoryxnotas dn on n.id = dn.id_nota " );
			sql.append("inner join tbnotasxuser nu on nu.id_nota = n.id " );
			sql.append("inner join tbuser u on u.id = nu.id_user " );
			sql.append("where u.id = ? and dn.id_directory = ?  order by n.data_atualizacao desc" );
			
			PreparedStatement stm = con.prepareStatement(sql.toString());
			stm.setLong(1, usuarioLogado.getId());
			stm.setLong(2, directoryFatherId);
			
			ResultSet rs = stm.executeQuery();
			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			List<NotasDTO> listDTO = new ArrayList<NotasDTO>();
			while(rs.next()) {
				NotasDTO notas = new NotasDTO();
				Date date = new Date(rs.getTimestamp("data_atualizacao").getTime());
				notas.setId(rs.getLong("id"));
				notas.setNome(rs.getString("titulo_nota"));
				notas.setDtAtualizacao(formato.format(date));
				listDTO.add(notas);
			}
			return listDTO;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<NotasDTO> listRecentsNotes() {
		try {
			Connection con = connectionDB.getConnection();
			
			StringBuilder sql= new StringBuilder();
			
			sql.append("select n.id, n.conteudo, n.data_atualizacao from tbnotas n inner join tbnotasxuser un on un.id_nota = n.id where un.id_user = ?  order by data_atualizacao desc limit 3 " );
			
			PreparedStatement stm = con.prepareStatement(sql.toString());
			stm.setLong(1, usuarioLogado.getId());
			
			ResultSet rs = stm.executeQuery();
			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			List<NotasDTO> listDTO = new ArrayList<NotasDTO>();
			while(rs.next()) {
				NotasDTO notas = new NotasDTO();
				Date date = new Date(rs.getTimestamp("data_atualizacao").getTime());
				notas.setId(rs.getLong("id"));
				notas.setConteudo(rs.getString("conteudo"));
				notas.setDtAtualizacao(formato.format(date));
				listDTO.add(notas);
			}
			return listDTO;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
}
