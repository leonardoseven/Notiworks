--drop table tbuser
CREATE TABLE tbuser (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome varchar(80) not null,
	sobrenome varchar(80),
    email varchar(100) UNIQUE not null,
    senha varchar(100) not null,
    plataforma_auth varchar,
    data_insercao timestamp not null,
    data_atualizacao timestamp not null,
    flpremium numeric(1) default 0,
    data_inicio_premium timestamp,
    data_final_premium timestamp,
    cargo varchar(100),
    empresa varchar(100),
    telefone_fk integer,
    chave varchar(127),
    tipo integer
);

INSERT INTO public.tbuser(
	nome, sobrenome, email, senha, plataforma_auth, data_insercao, data_atualizacao, flpremium, data_inicio_premium, data_final_premium, cargo, empresa, telefone_fk, chave, tipo)
	VALUES ('admin', null, 'admin@admin', '1234',null, now(), now(), 0,null, null, null, null, null, null, 0);
	
--drop table tbnotas
create table tbnotas(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    conteudo text,
	titulo_nota varchar(255),
    data_insercao timestamp not null,
    data_atualizacao timestamp not null,
    status_compartilhamento varchar(100)
);

--drop table tbdirectory
create table tbdirectory(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome_diretorio varchar(255),
	diretorio_pai_id integer,
    data_insercao timestamp not null,
    data_atualizacao timestamp not null
);


--drop table tbdirectoryxnotas
create table tbdirectoryxnotas(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	id_directory integer,
	id_nota integer
);

Alter table tbdirectoryxnotas add constraint fk_notasxdirectory foreign key (id_nota) References tbnotas (id);
Alter table tbdirectoryxnotas add constraint fk_notasxdirectory_d foreign key (id_directory) References tbdirectory (id);

--drop table tbnotasxuser
create table tbnotasxuser(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	id_user integer,
	id_nota integer
);

Alter table tbnotasxuser add constraint fk_tbnotasxuser foreign key (id_nota) References tbnotas (id);
Alter table tbnotasxuser add constraint fk_tbnotasxuser_u foreign key (id_user) References tbuser (id);

create table tbcontatos(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nome varchar(255),
	email varchar(255),
    data_insercao timestamp not null,
    data_atualizacao timestamp not null
);

create table tbcontatosxuser(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	id_user integer,
	id_contato integer
);

Alter table tbcontatosxuser add constraint fk_tbcontatosxuser foreign key (id_contato) References tbcontatos (id);
Alter table tbcontatosxuser add constraint fk_tbcontatosxuser_u foreign key (id_user) References tbuser (id);

