package com.mohamed.BookClub.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "books")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@NotBlank
	@Size(min = 2, max = 200, message = "title must be provided")
	private String title;
	
	@NotBlank
	@Size(min = 2, max = 200, message = "title must be provided")
	private String author;
	
	@NotBlank
	@Size(min = 2, max = 200, message = "description must be at least 3 characters")
	private String description;
	
	
	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
	
	public Book () {
		super();
	}
	
//  M : 1
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "posted_id")
	private User posted ;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public User getPosted() {
		return posted;
	}

	public void setPosted(User posted) {
		this.posted = posted;
	}
	
	
	
	
	

}
