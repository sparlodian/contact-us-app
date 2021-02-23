package contactus.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import contactus.server.model.ApiResponse;
import contactus.server.model.Contact;
import contactus.server.model.ContactDTO;
import contactus.server.service.ContactService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping	
    public ApiResponse<Contact> saveContact(@RequestBody ContactDTO contact){
        return new ApiResponse<>(HttpStatus.OK.value(), "Contact saved successfully.", contactService.save(contact));
    }

    @GetMapping
    public ApiResponse<List<Contact>> listContact(){
        return new ApiResponse<>(HttpStatus.OK.value(), "Contact list fetched successfully.", contactService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<Contact> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "Contact fetched successfully.", contactService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<ContactDTO> update(@RequestBody ContactDTO contactDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "Contact updated successfully.", contactService.update(contactDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        contactService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "Contact deleted successfully.", null);
    }

}