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

import br.com.notiworks.dao.config.ConnectionDB;
import br.com.notiworks.dto.ContatosDTO;
import br.com.notiworks.dto.DirectoryDTO;

@Component
public class ContatosDAO {

	
	@Autowired
	private ConnectionDB connectionDB;

	public List<ContatosDTO> findByUserId(Long id) {
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
//			
//			PreparedStatement stm = con.prepareStatement(sql.toString());
//			stm.setLong(1, usuarioLogado.getId());
//			
//			ResultSet rs = stm.executeQuery();
//			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
//			List<ContatosDTO> listDTO = new ArrayList<ContatosDTO>();
//			while(rs.next()) {
//				DirectoryDTO directory = new DirectoryDTO(rs.getString("nome_diretorio"), rs.getLong("id"), 0L);
//				Date date = new Date(rs.getTimestamp("data_atualizacao").getTime());
//				directory.setDtAtualizacao(formato.format(date));
//				listDTO.add(directory);
//			}
			return null;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
