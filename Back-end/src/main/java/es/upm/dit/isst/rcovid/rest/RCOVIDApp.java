package es.upm.dit.isst.rcovid.rest;
import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("rest")
public class RCOVIDApp extends ResourceConfig{
    public RCOVIDApp() {
        packages("es.upm.dit.isst.tfg.rest");
}
}

