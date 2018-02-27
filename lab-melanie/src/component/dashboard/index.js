import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../action/category-action';
import CategoryForm from '../category/category-form/index';

class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Name Some Categories</h1>
        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/>

        {this.props.categories ?
          this.props.categories.map(category =>
            <div key={category._id}>
              <h3>{category.title}</h3>
            </div>)
          : undefined
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(mapStateToProps, mapDispatchTpProps)(Dashboard);
