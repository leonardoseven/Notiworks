create database notiworks;

CREATE TABLE tbuser (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ,
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
	