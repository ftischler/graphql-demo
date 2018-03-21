import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

type HelloWorldQueryResult = ApolloQueryResult<{hello: string}>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public query$: Observable<string>;

  constructor(apollo: Apollo) {
    this.query$ = apollo.query({query: gql`{ hello }`, variables: null}).pipe(
      map<HelloWorldQueryResult, string>(res => res.data.hello)
    );
  }
}
