import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.prod'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
// Use the API URL from the environment configuration
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get(`${this.apiUrl}/products`).subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (err: any) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}