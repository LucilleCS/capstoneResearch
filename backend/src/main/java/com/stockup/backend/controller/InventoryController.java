package com.stockup.backend.controller;

import com.stockup.backend.model.Inventory;
import com.stockup.backend.repository.InventoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "http://localhost:3000")
public class InventoryController {

    private final InventoryRepository repository;

    public InventoryController(InventoryRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Inventory> getInventory() {
        return repository.findAll();
    }
}