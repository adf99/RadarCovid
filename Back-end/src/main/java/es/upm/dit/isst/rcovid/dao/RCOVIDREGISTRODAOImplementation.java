package es.upm.dit.isst.rcovid.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.rcovid.model.RCOVIDREGISTRO;
import es.upm.dit.isst.rcovid.dao.SessionFactoryService;

public class RCOVIDREGISTRODAOImplementation implements RCOVIDREGISTRODAO{
	private static  RCOVIDREGISTRODAOImplementation instancia = null;	
	private RCOVIDREGISTRODAOImplementation() {
		  }
	
	public static RCOVIDREGISTRODAOImplementation getInstance() {
		    if( null == instancia )
		      instancia = new RCOVIDREGISTRODAOImplementation();
		    return instancia;
		  }
	@Override
	public RCOVIDREGISTRO create(RCOVIDREGISTRO rcovidregistro) {
		  Session session = SessionFactoryService.get().openSession();
		  session.beginTransaction();
		  try{
			  session.save(rcovidregistro);
		  } catch(Exception e) {
			  rcovidregistro = null;
		  }
		  session.getTransaction().commit();
		  session.close();
		  return rcovidregistro;
	}
 
	public RCOVIDREGISTRO read(String mac) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		RCOVIDREGISTRO rcovidregistro = session.get(RCOVIDREGISTRO.class, mac);
		session.getTransaction().commit();
		session.close();
		return rcovidregistro;
	}	
	public RCOVIDREGISTRO update(RCOVIDREGISTRO rcovidregistro) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(rcovidregistro);
		session.getTransaction().commit();
		session.close();
		return rcovidregistro;
	}
	
	public RCOVIDREGISTRO delete(RCOVIDREGISTRO rcovidregistro) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(rcovidregistro);
		session.getTransaction().commit();
		session.close();
		return rcovidregistro;
	}
	
	public List<RCOVIDREGISTRO> readAll(){
		List<RCOVIDREGISTRO> lista = new ArrayList<RCOVIDREGISTRO> ();
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		lista.addAll(session.createQuery("from RCOVIDREGISTRO").list());
		session.getTransaction().commit();
		session.close();
		return lista;
	}
}
