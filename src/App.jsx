import parse from 'html-react-parser';
import AppLayout from 'component/AppLayout';
import MainCareerTable from 'component/MainCareerTable';
import { profileInfoList } from 'util/data';
// import temp_img from 'asset/image/temp_img.png';

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
                    TODO: 코딩 사진 or 했던 프로젝트, 클라이언트 로고(바둑판)
                  </figure>
                </article>
              </div>
            </div>
            <MainCareerTable />
            <div className="table-row">
              <div className="table-col">
                <article className="main-foot">
                  <p>ⓒ 2023 Ji Young Park</p>
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
