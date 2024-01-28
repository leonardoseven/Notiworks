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
import br.com.notiworks.dto.DirectoryListDTO;
import br.com.notiworks.models.Notas;

@Component
public class DirectoryDAO {

	@Autowired
	private UsuarioLogado usuarioLogado;
	
	@Autowired
	private ConnectionDB connectionDB;
	
	public List<DirectoryListDTO> getDirectorysByUserId() {
		try {
			Connection con = connectionDB.getConnection();
			
			StringBuilder sql= new StringBuilder();
			sql.append("select d.id as directoryid, d.nome_diretorio as directoryname,d.diretorio_pai_id as directorypai,d.data_atualizacao as directoryatt, n.id as notaid, n.titulo_nota as titulo, n.data_atualizacao as notaatt " );
			sql.append("from tbdirectory d " );
			sql.append("inner join tbdirectoryxnotas dn on d.id = dn.id_directory " );
			sql.append("inner join tbnotas n on n.id = dn.id_nota " );
			sql.append("inner join tbnotasxuser nu on nu.id_nota = n.id " );
			sql.append("inner join tbuser u on u.id = nu.id_user " );
			sql.append("where u.id = ? " );
			
			PreparedStatement stm = con.prepareStatement(sql.toString());
			stm.setLong(1, usuarioLogado.getId());
			
			ResultSet rs = stm.executeQuery();
			Long id_dir = null;
			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			List<DirectoryListDTO> listDTO = new ArrayList<DirectoryListDTO>();
			DirectoryListDTO dto = null;
			while(rs.next()) {
				Long directoryId = rs.getLong("directoryid");  
				if(directoryId != id_dir) {
					dto = new DirectoryListDTO();
					dto.setDirectoryId(directoryId);
					dto.setDirectoryName(rs.getString("directoryname"));
					Date date = new Date(rs.getTimestamp("directoryatt").getTime());
					dto.setDtAtualizacao(formato.format(date));
					listDTO.add(dto);
					id_dir = directoryId;
				}
				Notas n = new Notas();
				n.setId(rs.getLong("notaid"));
				Date date = new Date(rs.getTimestamp("notaatt").getTime());
				n.setData_atualizacao_formated(formato.format(date));
				n.setTitulo(rs.getString("titulo"));
				if(dto.getListNotas() == null)
					dto.setListNotas(new ArrayList<Notas>());
				dto.getListNotas().add(n);
			}
			return listDTO;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<DirectoryDTO> findByUserIdWherePaiIdIsNull() {

		try {
			Connection con = connectionDB.getConnection();
			
			StringBuilder sql= new StringBuilder();
			sql.append("select d.id, d.nome_diretorio,d.diretorio_pai_id,d.data_atualizacao " );
			sql.append("from tbdirectory d " );
			sql.append("inner join tbdirectoryxnotas dn on d.id = dn.id_directory " );
			sql.append("inner join tbnotas n on n.id = dn.id_nota " );
			sql.append("inner join tbnotasxuser nu on nu.id_nota = n.id " );
			sql.append("inner join tbuser u on u.id = nu.id_user " );
			sql.append("where u.id = ? and d.diretorio_pai_id is null " );
			sql.append("group by d.id order by d.data_atualizacao desc");
			
			PreparedStatement stm = con.prepareStatement(sql.toString());
			stm.setLong(1, usuarioLogado.getId());
			
			ResultSet rs = stm.executeQuery();
			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			List<DirectoryDTO> listDTO = new ArrayList<DirectoryDTO>();
			while(rs.next()) {
				DirectoryDTO directory = new DirectoryDTO(rs.getString("nome_diretorio"), rs.getLong("id"), 0L);
				Date date = new Date(rs.getTimestamp("data_atualizacao").getTime());
				directory.setDtAtualizacao(formato.format(date));
				listDTO.add(directory);
			}
			return listDTO;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<DirectoryDTO> findByUserIdByPaiId(Long directoryFatherId) {
		try {
			Connection con = connectionDB.getConnection();
			
			StringBuilder sql= new StringBuilder();
			sql.append("select d.id, d.nome_diretorio,d.diretorio_pai_id,d.data_atualizacao " );
			sql.append("from tbdirectory d " );
			sql.append("inner join tbdirectoryxnotas dn on d.id = dn.id_directory " );
			sql.append("inner join tbnotas n on n.id = dn.id_nota " );
			sql.append("inner join tbnotasxuser nu on nu.id_nota = n.id " );
			sql.append("inner join tbuser u on u.id = nu.id_user " );
			sql.append("where u.id = ? and d.diretorio_pai_id = ? " );
			sql.append("group by d.id order by d.data_atualizacao desc");
			
			PreparedStatement stm = con.prepareStatement(sql.toString());
			stm.setLong(1, usuarioLogado.getId());
			stm.setLong(2, directoryFatherId);
			
			ResultSet rs = stm.executeQuery();
			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
			List<DirectoryDTO> listDTO = new ArrayList<DirectoryDTO>();
			while(rs.next()) {
				DirectoryDTO directory = new DirectoryDTO(rs.getString("nome_diretorio"), rs.getLong("id"), directoryFatherId);
				Date date = new Date(rs.getTimestamp("data_atualizacao").getTime());
				directory.setDtAtualizacao(formato.format(date));
				listDTO.add(directory);
			}
			return listDTO;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}	
	
}
