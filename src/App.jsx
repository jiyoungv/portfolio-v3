import parse from 'html-react-parser';
import AppLayout from 'component/AppLayout';
import MainCareerTable from 'component/MainCareerTable';
import { profileInfoList } from 'util/data';
import collect_img from 'asset/image/collect_img.png';
import collect_img2 from 'asset/image/collect_img2.png';

const App = () => {
  return (
    <AppLayout>
      <section className="main-section">
        <div className="common-inner">
          <article className="main-table">
            <div className="table-row">
              <div className="table-col">
                <article className="main-head">
                  <p>web publisher portfolio</p>
                </article>
              </div>
            </div>
            <div className="table-row">
              <div className="table-col-4">
                <article className="main-logo">
                  <h1>P.</h1>
                </article>
              </div>
              <div className="table-col-4">
                <article className="main-profile-name">
                  <h1>
                    박지영. <br/>
                    Ji Young <br/>
                    Park.
                  </h1>
                </article>
              </div>
              <div className="table-col-16">
                <article className="main-profile-info">
                  {profileInfoList.map((v, i) => (
                    <dl key={i}>
                      <dt>{v.title}</dt>
                      <dd>{parse(v.text)}</dd>
                    </dl>
                  ))}
                </article>
              </div>
            </div>
            <div className="table-row">
              <div className="table-col">
                <article className="main-career-collect">
                  <figure>
                    <img src={collect_img} alt="" />
                  </figure>
                </article>
              </div>
            </div>
            <div className="table-row">
              <div className="table-col">
                <article className="main-career-point">
                  <h2>5년 이상의 경력. 50개 이상의 웹사이트 제작 경험.</h2>
                </article>
              </div>
            </div>
            <div className="table-row">
              <div className="table-col">
                <article className="main-career-collect">
                  <figure>
                    <img src={collect_img2} alt="" />
                  </figure>
                </article>
              </div>
            </div>
            <MainCareerTable />
            <div className="table-row">
              <div className="table-col">
                <article className="main-foot">
                  <p>ⓒ 2024 Ji Young Park</p>
                </article>
              </div>
            </div>
          </article>
        </div>
      </section>
    </AppLayout>
  );
};

export default App;
