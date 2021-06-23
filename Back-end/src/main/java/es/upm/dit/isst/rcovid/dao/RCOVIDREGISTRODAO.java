package es.upm.dit.isst.rcovid.dao;

import java.util.List;
import es.upm.dit.isst.rcovid.model.RCOVIDREGISTRO;

public interface RCOVIDREGISTRODAO {
	public RCOVIDREGISTRO create(RCOVIDREGISTRO rcovidregistro);
	public RCOVIDREGISTRO update(RCOVIDREGISTRO rcovidregistro);
	public RCOVIDREGISTRO delete(RCOVIDREGISTRO rcovidregistro);
	public RCOVIDREGISTRO read(String mac);
	public List<RCOVIDREGISTRO> readAll();
}
