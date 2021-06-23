package es.upm.dit.isst.rcovid.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Entity
public class RCOVID implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	private String uuid;
	private String id;
	private boolean sanidad;
	
	/*@OneToOne(mappedBy="rcovid")
	private RCOVIDREGISTRO rcovidregistro;
	
	public RCOVIDREGISTRO getRcovidregistro() {
		return rcovidregistro;
	}
	public void setRcovidregistro(RCOVIDREGISTRO rcovidregistro) {
		this.rcovidregistro = rcovidregistro;
	}*/
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public boolean isSanidad() {
		return sanidad;
	}
	public void setSanidad(boolean sanidad) {
		this.sanidad = sanidad;
	}
	
}
