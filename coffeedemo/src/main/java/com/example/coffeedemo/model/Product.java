package com.example.coffeedemo.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.time.LocalDate;


@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(cascade = { CascadeType.REFRESH, CascadeType.DETACH })
    @JoinColumn(name = "product_id")
    @JsonIgnore
    private Product product;

    @Column(name = "title")
    private String title;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "start_date")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate startDate;

    @Column(name = "end_date")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate endDate;

    @Column(name = "category")
    private String category;
    @Column(name = "amount")
    private int amount;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private double price;
    @Column(name = "imageURL")
    private String imageURL;




    public Product(){

    }
    public Product(String title, String productName, LocalDate startDate, LocalDate endDate, String category, int amount, String description, double price, String imageURL) {
        super();
        this.title = title;
        this.productName = productName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.category = category;
        this.amount = amount;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
    }

    public Product(int id) {
        this.id = id;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public static Product empty() {
        return new Product(-1);
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

}
