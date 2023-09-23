import parse from 'html-react-parser';
import { careerList } from 'util/data';

const MainCareerTable = () => {
  return (
    <>
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
      <div className="main-career-body">
        {careerList.map((v, i) => (
          <div key={i} className="table-row">
            <div className="table-col-12">
              <div className="table-row depth2 height-full">
                <div className="table-col-8">
                  <article className="main-career-body-left main-career-company-name">
                    <p>{parse(v.name)}</p>
                  </article>
                </div>
                <div className="table-col-8">
                  <article className="main-career-body-left main-career-period">
                    <p>{v.startDate}~{v.endDate} <small>(2년 7개월)</small></p>
                  </article>
                </div>
                <div className="table-col-8">
                  <article className="main-career-body-left">
                    {v.description && (
                      <ul>
                        {v.description.map((v2, i2) => (
                          <li key={i2}>{v2}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                </div>
              </div>
            </div>
            <div className="table-col-12">
              {v.project.map((v2, i2) => (
                <div key={i2} className="table-row depth2">
                  <div className="table-col-8">
                    <article>
                      {v2.device && (
                        <ul>
                          {v2.device.map((v3, i3) => (
                            <li key={i3}>{v3}</li>
                          ))}
                        </ul>
                      )}
                      <p>{v2.name}</p>
                      {v2.link && (
                        <ul>
                          {v2.link.prod && <li><a href={v2.link.prod} target="_blank" rel="noreferrer">prod</a></li>}
                          {v2.link.test && <li><a href={v2.link.test} target="_blank" rel="noreferrer">test</a></li>}
                          {v2.link.git && <li><a href={v2.link.git} target="_blank" rel="noreferrer">git</a></li>}
                        </ul>
                      )}
                    </article>
                  </div>
                  <div className="table-col-8">
                    <article className="main-career-period">
                      <p>{v2.startDate}~{v2.endDate} <small>(2년 7개월)</small></p>
                    </article>
                  </div>
                  <div className="table-col-8">
                    <article>
                      {v2.description && (
                        <ul>
                          {v2.description.map((v3, i3) => (
                            <li key={i3}>{v3}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainCareerTable;