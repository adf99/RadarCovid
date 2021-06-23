package es.upm.dit.isst.rcovid.dao;

import java.util.List;
import es.upm.dit.isst.rcovid.model.RCOVID;

public interface RCOVIDDAO {
	public RCOVID create(RCOVID rcovid);
	public RCOVID update(RCOVID rcovid);
	public RCOVID delete(RCOVID rcovid);
	public RCOVID read(String mac);
	public List<RCOVID> readAll();
}
