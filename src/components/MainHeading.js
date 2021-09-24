import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function MainHeading() {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const GoSearch = () => {
    history.push(`search/${category}/${keyword}`);
  };
  return (
    <div className="jumbotron text-center">
      <center>
        <div className="container">
          <h1 className="display-4 font-weight-bold">Bienvenue a Recetti</h1>
          <p className="lead font-weight-normal">
            Votre meilleur espace de découvrir et partager des recettes
          </p>
          <hr />
          <p className="lead">
            <h1 className="font-weight-bold" data-aos="fade-up">
              <i
                className="fa fa-search"
                style={{color: '#f64152'}}
                aria-hidden="true"
              ></i>{' '}
              Trouvez votre recette facilement
            </h1>
            <br />
            <form
              data-aos="slide-up"
              className="form-group"
              onSubmit={GoSearch}
              style={{width: '80%'}}
            >
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label for="inputCity">Recette</label>
                  <input
                    value={keyword}
                    onChange={event => setKeyword(event.target.value)}
                    type="text"
                    className="form-control search_form"
                    id="inputCity"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Catégorie</label>
                  <select
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    id="inputState"
                    className="form-control search_form"
                  >
                    <option value="petit-dejeuner">Petit déjeuner</option>
                    <option value="dejeuner">Déjeuner</option>
                    <option value="diner">Diner</option>
                    <option value="dessert">Dessert</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Rechercher
                </button>
              </div>
            </form>
            <div className="btn-group font-weight-bold">
              <a
                data-aos="zoom-in"
                href="categories/Petit-Déjeuner"
                className="btn btn-primary mr-1 font-weight-bold"
              >
                <i className="fa fa-tag"></i>&nbsp; Petit Déjeuner
              </a>
              <a
                data-aos="zoom-in"
                href="categories/Déjeuner"
                className="btn btn-primary mr-1 font-weight-bold"
              >
                <i className="fa fa-tag"></i>&nbsp; Déjeuner
              </a>
              <a
                data-aos="zoom-in"
                href="categories/Diner"
                className="btn btn-primary mr-1 font-weight-bold"
              >
                <i className="fa fa-tag"></i>&nbsp; Diner
              </a>
              <a
                data-aos="zoom-in"
                href="categories/Dessert"
                className="btn btn-primary mr-1 font-weight-bold"
              >
                <i className="fa fa-tag"></i>&nbsp; Dessert
              </a>
            </div>
          </p>
        </div>
      </center>
    </div>
  );
}
