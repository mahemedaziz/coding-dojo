package com.mohamed.BookClub.models;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotEmpty(message = "First Name must not be Emty")
	@Size(min = 2, max = 200, message = "First Name must be between 2 and 200 charactere")
	private String firstName;

	@NotEmpty(message = "Last Name must not be Emty")
	@Size(min = 2, max = 200, message = "Last Name must be between 2 and 200 charactere")
	private String lastName;

	@NotEmpty(message = "email must not be Emty")
	@Email(message = "please enter a valid email")
	private String email;

	@NotEmpty
	@Size(min = 8, max = 200, message = "password must be between 2 and 200 char ")
	private String password;

	@Transient
	@NotEmpty
	@Size(min = 2, max = 200, message = "Confirm password must be between 2 and 200 char ")
	private String comfirmPassword;

	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;

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
	
	


//	//  1 : M
	@OneToMany(mappedBy = "posted",fetch = FetchType.LAZY )
	private  List<Book> createBooks;

	
	
	public List<Book> getCreateBooks() {
		return createBooks;
	}

	public void setCreateBooks(List<Book> createBooks) {
		this.createBooks = createBooks;
	}

	public User() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getComfirmPassword() {
		return comfirmPassword;
	}

	public void setComfirmPassword(String comfirmPassword) {
		this.comfirmPassword = comfirmPassword;
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

}
