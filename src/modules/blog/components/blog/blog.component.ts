import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../services/blog/blog.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	message: any = '';

	constructor(private blogService: BlogService) {
	}

	ngOnInit() {
		console.log('This is in the init');
		this.blogService.query().subscribe(msg => {
			console.log('The object is: ', msg);
			this.message = msg;
		});
	}

}
