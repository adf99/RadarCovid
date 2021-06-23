package es.upm.dit.isst.rcovid.dao;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.rcovid.model.RCOVID;
import es.upm.dit.isst.rcovid.dao.SessionFactoryService;


public class RCOVIDDAOImplementation implements RCOVIDDAO {
	private static  RCOVIDDAOImplementation instancia = null;	
	private RCOVIDDAOImplementation() {
		  }
	
	public static RCOVIDDAOImplementation getInstance() {
		    if( null == instancia )
		      instancia = new RCOVIDDAOImplementation();
		    return instancia;
		  }
 @Override
	public RCOVID create(RCOVID rcovid) {
		  Session session = SessionFactoryService.get().openSession();
		  session.beginTransaction();
		  try{
			  session.save(rcovid);
		  } catch(Exception e) {
			  rcovid = null;
		  }
		  session.getTransaction().commit();
		  session.close();
		  return rcovid;
	}
 
	public RCOVID read(String mac) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		RCOVID rcovid = session.get(RCOVID.class, mac);
		session.getTransaction().commit();
		session.close();
		return rcovid;
	}	
	public RCOVID update(RCOVID rcovid) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(rcovid);
		session.getTransaction().commit();
		session.close();
		return rcovid;
	}
	
	public RCOVID delete(RCOVID rcovid) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(rcovid);
		session.getTransaction().commit();
		session.close();
		return rcovid;
	}
	
	public List<RCOVID> readAll(){
		List<RCOVID> lista = new ArrayList<RCOVID> ();
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		lista.addAll(session.createQuery("from RCOVID").list());
		session.getTransaction().commit();
		session.close();
		return lista;
	}
	
}
