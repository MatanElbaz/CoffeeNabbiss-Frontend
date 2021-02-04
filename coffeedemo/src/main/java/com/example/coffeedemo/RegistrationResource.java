//package com.example.coffeedemo;
//
//import com.example.coffeedemo.data.db.RegistrationRepository;
//import com.example.coffeedemo.model.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
////@CrossOrigin(origins = { "http://localhost:3000" }, allowCredentials = "true")
//@RequestMapping("/api")
//public class RegistrationResource {
//    @Autowired
//    RegistrationRepository fieldsRepository;
//
//    @GetMapping(path = "/forms")
//    public List<User> getAllUsers() {
//       return fieldsRepository.getAllUsers();
//    }
//}