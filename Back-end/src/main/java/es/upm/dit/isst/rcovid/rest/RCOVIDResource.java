package es.upm.dit.isst.rcovid.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import es.upm.dit.isst.rcovid.dao.RCOVIDDAOImplementation;
import es.upm.dit.isst.rcovid.dao.RCOVIDREGISTRODAOImplementation;
import es.upm.dit.isst.rcovid.model.RCOVID;
import es.upm.dit.isst.rcovid.model.RCOVIDREGISTRO;

@Path("/RCOVID")
public class RCOVIDResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<RCOVID> readAll () {
	        return RCOVIDDAOImplementation.getInstance().readAll();
	}
	
    @GET
    @Path("{uuid}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response read(@PathParam("uuid") String uuid) {
    	RCOVID t = RCOVIDDAOImplementation.getInstance().read(uuid);
        if (t == null)
          return Response.status(Response.Status.NOT_FOUND).build();
        return Response.ok(t, MediaType.APPLICATION_JSON).build();
    } 
    
	@POST
	@Path("{uuid}/{id}/{sanidad}/new")
	public Response createNew(@PathParam("uuid") String uuid, @PathParam("id") String id, @PathParam("sanidad") boolean sanidad) throws URISyntaxException {
		RCOVID res = new RCOVID();
		res.setUuid(uuid);
		res.setId(id);
		res.setSanidad(sanidad);
		RCOVID r = RCOVIDDAOImplementation.getInstance().create(res);
	    if (r != null) {
	            URI uri = new URI("/RADAR-COVID/rest/RCOVID/" + r.getUuid());
	            return Response.created(uri).build();
	    }
	    return Response.status(Response.Status.NOT_FOUND).build();
	}    

    @POST
    @Path("{uuid}/{id}/{sanidad}")
    public Response update(@PathParam("uuid") String uuid, @PathParam("id") String id, @PathParam("sanidad") boolean sanidad) {
		RCOVID res = new RCOVID();
		res.setUuid(uuid);
		res.setId(id);
		res.setSanidad(sanidad);
        RCOVID r = RCOVIDDAOImplementation.getInstance().read(uuid);
        if ((r == null) || (! r.getUuid().contentEquals(r.getUuid())))
          return Response.notModified().build();
        RCOVIDDAOImplementation.getInstance().update(res);
        return Response.ok().build();                 
    }


    @DELETE
    @Path("{uuid}")
    public Response delete(@PathParam("uuid") String  uuid) {
    	RCOVID r = RCOVIDDAOImplementation.getInstance().read(uuid);
        if (r == null)
            return Response.notModified().build();
        RCOVIDDAOImplementation.getInstance().delete(r);
        return Response.ok().build();
    }
	@GET
	@Path("RCOVIDREGISTRO")
	@Produces(MediaType.APPLICATION_JSON)
	public List<RCOVIDREGISTRO> readAllregistro () {
	        return RCOVIDREGISTRODAOImplementation.getInstance().readAll();
	}
 	@GET
 	@Path("RCOVIDREGISTRO/{uuid}")
 	@Produces(MediaType.APPLICATION_JSON)
 	public Response readregistro(@PathParam("uuid") String uuid) {
 		RCOVIDREGISTRO t = RCOVIDREGISTRODAOImplementation.getInstance().read(uuid);
 		if (t == null)
 			return Response.status(Response.Status.NOT_FOUND).build();
 		return Response.ok(t, MediaType.APPLICATION_JSON).build();
 	} 
	@POST
	@Path("RCOVIDREGISTRO/{uuid}/{nombre}/{apellidos}/{dni}/{correo}/{telefono}/new")
	public Response createNewregistro(@PathParam("uuid") String uuid, @PathParam("nombre") String nombre, @PathParam("apellidos") String apellidos, @PathParam("dni") String dni, @PathParam("correo") String correo, @PathParam("telefono") int telefono ) throws URISyntaxException {
		RCOVIDREGISTRO res = new RCOVIDREGISTRO();
		res.setUuid(uuid);
		res.setNombre(nombre);
		res.setApellidos(apellidos);
		res.setDni(dni);
		res.setCorreo(correo);
		res.setTelefono(telefono);
		RCOVIDREGISTRO r = RCOVIDREGISTRODAOImplementation.getInstance().create(res);
	    if (r != null) {
	            URI uri = new URI("/RADAR-COVID/rest/RCOVIDREGISTRO/" + r.getUuid());
	            return Response.created(uri).build();
	    }
	    return Response.status(Response.Status.NOT_FOUND).build();
	} 
    @DELETE
    @Path("RCOVIDREGISTRO/{uuid}")
    public Response deleteregistro(@PathParam("uuid") String  uuid) {
    	RCOVIDREGISTRO r = RCOVIDREGISTRODAOImplementation.getInstance().read(uuid);
        if (r == null)
            return Response.notModified().build();
        RCOVIDREGISTRODAOImplementation.getInstance().delete(r);
        return Response.ok().build();
    }
}
