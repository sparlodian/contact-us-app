package contactus.server.service;

import contactus.server.model.*;

import java.util.List;

public interface ContactService {

    Contact save(ContactDTO contact);
    List<Contact> findAll();
    void delete(int id);

    Contact findOne(String contactName);

    Contact findById(int id);

    ContactDTO update(ContactDTO contactDTO);
}