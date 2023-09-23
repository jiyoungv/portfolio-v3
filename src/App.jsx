// import { RiLink, RiFlaskFill, RiGithubFill } from 'react-icons/ri';
import parse from 'html-react-parser';
import AppLayout from 'component/AppLayout';
import { profileInfoList } from 'util/data';
// import temp_img from 'asset/image/temp_img.png';

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
            <div className="table-col-4">
              <article className="main-logo">
                <h1>P.</h1>
              </article>
            </div>
            <div className="table-col-4">
              <article className="main-profile-name">
                <h6>Ji Young <br/>Park</h6>
              </article>
            </div>
            <div className="table-col-14">
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
          <div className="main-career-head">
            <div className="table-row">
              <div className="table-col">
                <article className="main-career-title">
                  <h6>career</h6>
                </article>
              </div>
            </div>
            <div className="table-row">
              <div className="table-col-12">
                <article className="main-career-head-col">
                  <p>company</p>
                </article>
              </div>
              <div className="table-col-12">
                <article className="main-career-head-col">
                  <p>project</p>
                </article>
              </div>
            </div>
            <div className="table-row">
              <div className="table-col-4">
                <article className="main-career-head-col">
                  <p>name</p>
                </article>
              </div>
              <div className="table-col-4">
                <article className="main-career-head-col">
                  <p>period</p>
                </article>
              </div>
              <div className="table-col-4">
                <article className="main-career-head-col">
                  <p>description</p>
                </article>
              </div>
              <div className="table-col-4">
                <article className="main-career-head-col">
                  <p>device / name / link</p>
                </article>
              </div>
              <div className="table-col-4">
                <article className="main-career-head-col">
                  <p>period</p>
                </article>
              </div>
              <div className="table-col-4">
                <article className="main-career-head-col">
                  <p>description</p>
                </article>
              </div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-col">
              <article style={{ height: 800 }}>
                내용
              </article>
            </div>
          </div>
          <div className="table-row">
            <div className="table-col">
              <article>
                d
              </article>
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
