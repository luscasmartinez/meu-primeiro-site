package site.drink;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FormularioController {
    
    
    private final FormularioRepository formularioRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public String mensagem (){
        return "HOP";
    }
    
    public FormularioController (FormularioRepository formularioRepository){
        this.formularioRepository = formularioRepository;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/listarFormularios")
    public List<Formulario> listarFormularios() {
        return formularioRepository.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping(value = "/enviarFormulario", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void receberFormulario(@RequestBody Formulario formulario){
        formularioRepository.save(formulario);
    }
}
