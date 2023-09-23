import { RiLink, RiFlaskFill, RiGithubFill } from 'react-icons/ri';
import AppLayout from 'component/AppLayout';
import temp_img from 'asset/image/temp_img.png';

const App = () => {
  return (
    <AppLayout>
      <div className="common-inner">
        <section className="main-table">
          <div className="table-row">
            <div className="table-col">
              <article className="main-head">
                <h6>web publisher portfolio</h6>
              </article>
            </div>
          </div>
          <div className="table-row">
            <div className="table-col-2">
              <article className="main-logo">
                <h1>P.</h1>
              </article>
            </div>
            <div className="table-col-4">
              <article className="main-profile-name">
                <h6>Ji Young <br/>Park</h6>
              </article>
            </div>
            <div className="table-col-18">
              2
            </div>
          </div>
          <div className="table-row">
            <div className="table-col">
              2
            </div>
          </div>
          <div className="table-row">
            <div className="table-col">
              <article className="main-foot">
                <p>ⓒ 2023 Ji Young Park</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default App;
