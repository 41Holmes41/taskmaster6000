import React from 'react';

const PageIntro = (props) => {
  return (
    <div class="jumbotron">
      <div className="row">
        <div className="col-6">
          <h1 class="display-4">UserName</h1>
        </div>
        <div className="col-6">
          <h1 class="display-4">64 points</h1>
        </div>
      </div>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
  )
}

export default PageIntro;