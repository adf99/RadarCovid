package es.upm.dit.isst.rcovid.model;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class RCOVIDREGISTRO  implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	private String uuid;
	private String nombre;
	private String apellidos;
	private String dni;
	private int telefono;
	private String correo;
	
	/*@OneToOne
	@JoinColumn(name="uuidFK")
	private RCOVID rcovid;
	
	public RCOVID getRcovid() {
		return rcovid;
	}
	public void setRcovid(RCOVID rcovid) {
		this.rcovid = rcovid;
	}*/
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public int getTelefono() {
		return telefono;
	}
	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	
}
