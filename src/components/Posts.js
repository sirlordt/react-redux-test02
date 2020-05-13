import React, { Component } from "react";
import { connect } from "react-redux";
import {
  articlesFetch, articlesAdd
} from "../redux/actions";

export class Post extends Component {

  constructor( props ) {

    super( props );
    this.props.articlesFetch();

    //console.log( props );

  }

  componentDidMount() {

    console.log( "componentDidMount" );
    this.props.articlesFetch();

    this.props.articlesAdd(
                            [
                              {
                                id: 1,
                                title: "local article 01"
                              },
                              {
                                id: 2,
                                title: "local article 02"
                              }
                            ]
                          );

  }

  render() {

    return (
      <div>
        <ul>
          {this.props.articlesRemote.map( ( el ) => (
            <li key={ el.id }>{el.title}</li>
          ) )}
        </ul>
        <ul>
          {this.props.articlesLocal.map( ( el ) => (
            <li key={ el.id }>{el.title}</li>
          ) )}
        </ul>
      </div>
    );

  }

}
const mapDispatchToProps = {
 articlesFetch, articlesAdd
};

const mapStateToProps = ( state ) => {

  console.log( "State => ", state );
  return {
           articlesRemote: state.articlesRemote.items.slice( 0, 10 ),
           articlesLocal: state.articlesLocal.items
         };

};

const connectedWrapper = connect( mapStateToProps, mapDispatchToProps );

const connectedComponent = connectedWrapper( Post );

export default connectedComponent;

/*
export default connect(
  mapStateToProps,
  { articlesFetch }
)( Post );
*/
