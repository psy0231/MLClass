import React, { Component } from 'react';
import axios from "axios";
// import $ from 'jquery';

import '../index.css';

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: 0,
      life: 0,
      cousin: 0, 
      trip: 0, 
      house: 0, 
      land: 0,
      rdata: '',
      result: '',
      msg: '',
      showResult: false, 
      showAnimation: false, 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.country_data = this.country_data.bind(this);
    this.city_data = this.city_data.bind(this);
    // this.setState({shouldShowDiv: false});
  }
  
  handleChange(event) {
    const target = event.target;
    console.log('-> target.name: ' + target.name);
    console.log('-> target.value: ' + target.value);

    // this.setState ({
    //   [target.name]: target.value,
    // });

    this.setState(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }));

  }

  handleSubmit(event) {
    this.setState({showAnimation: true}); 

    event.preventDefault();
    axios
    .get("http://127.0.0.1:8000/ais/country_proc/", {
      params: {
        drink: this.state.drink,
        life: this.state.life,
        cousin: this.state.cousin,
        trip: this.state.trip,
        house: this.state.house,
        land: this.state.land
      },
    })
    .then((response) => {
      let rdata = response.data
      // console.log('-> ' + rdata);
      
      // this.props.history.push("/login");
      this.setState({rdata: JSON.stringify(rdata) });
      this.setState({result: rdata.result });
      console.log('-> JSON.stringify(rdata): ' + JSON.stringify(rdata));
      
      if (rdata.result >= 50) {
          this.setState({msg: '시골형: 시골에 적응 할 수 있습니다.'});
      } else {
          this.setState({msg: '도시형: 시골에 적응이 불가능합니다.'});
      }

      this.setState({showAnimation: false}); 
      this.setState({showResult: true}); 
    })
    .catch(error => {
      console.error(error);
    });

  } 

  // 시골형: 2,1,1,10,1,2
  country_data() {
    this.setState({drink: 2, life: '1', cousin: '1', trip: 10, house: '1', land: '2'});
  }

  // 도시형: 2,1,0,7,1,0
  city_data() {
    this.setState({drink: 2, life: '1', cousin: '0', trip: 7, house: '1', land: '0'});
  }

  render () { 
    return (
      <div className='div_style'>

        <h4>귀농귀촌 적응 예측 시스템(이항분류)</h4>

        {this.state.showAnimation &&
        <div id='panel' className="panel" style={{textAlign: 'center'}}>
          <img src='/images/ani04.gif' style={{width: '50px', margin: '10px auto'}} />
        </div>
        }

        {this.state.showResult &&
        <div id='panel' className="panel">
          <ul>
            <li style={{listStyle: "none"}}>{this.state.rdata}</li>
            <li style={{listStyle: "none"}}><br/>예측 결과(적응률): {this.state.result} %</li>
            <li style={{listStyle: "none"}}><br/>{this.state.msg}</li>
          </ul>
        </div>
        }

        <form onSubmit={this.handleSubmit}>
          <ol>
            <li className="li_question">
                주당 음주 횟수: 0 ~ 3(3회 이상):
                <input name="drink" id="drink" type="number" min = "0" max="3" step="1" value={this.state.drink} onChange={this.handleChange} />
            </li>
            <li className="li_question">
                농촌에서 생활적이 있다:
                <label className="li_label">
                    <input name="life" id="life1" type="radio" value="1"
                           checked={this.state.life === '1'} onChange={this.handleChange} /> 있음(1)
                </label>
                <label className="li_label">
                    <input name="life"  id="life0" type="radio" value="0" 
                           checked={this.state.life === '0'} onChange={this.handleChange} /> 없음(0)
                </label>
            </li>
            <li className="li_question">
                가족중에 농촌에서 생활하고 있는 친척있는 여부:
                <label className="li_label">
                    <input name="cousin" id="cousin1" type="radio" value="1"
                           checked={this.state.cousin === '1'} onChange={this.handleChange} /> 있음(1)
                </label>
                <label className="li_label">
                    <input name="cousin" id="cousin0" type="radio" value="0" 
                           checked={this.state.cousin === '0'} onChange={this.handleChange} /> 없음(0)
                </label>
            </li>
            <li className="li_question">
                1년동안의 여행 횟수: 0 ~ 12 (등산/캠핑, 당일, 국내, 국외 모두 해당)
                <input name="trip" id="trip" type="number" min = "0" max="12" step="1" value={this.state.trip} onChange={this.handleChange} />
            </li>
            <li className="li_question">
                집을 소유 할 수 있는 경제력:
                <label className="li_label">
                    <input name="house" id="house1" type="radio" value="1"
                           checked={this.state.house === '1'} onChange={this.handleChange} /> 있음(1)
                </label>
                <label className="li_label">
                    <input name="house" id="house0" type="radio" value="0" 
                           checked={this.state.house === '0'} onChange={this.handleChange} /> 없음(0)
                </label>
            </li>
            <li className="li_question">
                경작 할 수 있는 토지 평수: 0 ~ (평)<br/>
                <label className="li_label">
                    <input name="land" id="land0" type="radio" value="0" 
                           checked={this.state.land === '0'} onChange={this.handleChange} /> 없음
                </label>
                <label className="li_label">
                    <input name="land" id="land1" type="radio" value="1" 
                           checked={this.state.land === '1'} onChange={this.handleChange} /> 1 ~ 2000 미만
                </label>
                <label className="li_label">
                    <input name="land" id="land2" type="radio" value="2" 
                           checked={this.state.land === '2'} onChange={this.handleChange} /> 2000이상 ~ 3000미만
                </label>
                <label className="li_label">
                    <input name="land" id="land3" type="radio" value="3" 
                           checked={this.state.land === '3'} onChange={this.handleChange} /> 3000이상
                </label>
            </li>          

          </ol>
          <div style={{textAlign: "center", width: "80%", margin: "2%"}}>
              <button type='button' id='btn_country' className='button btn btn-info btn-sm button_menu' onClick={this.country_data}>시골형 데이터 설정</button>
              <button type='button' id='btn_city' className='button btn btn-info btn-sm button_menu' onClick={this.city_data}>도시형 데이터 설정</button>
              <button type='submit' id='btn_send' className='button btn btn-info btn-sm button_menu'>예측</button>
          </div>        
        </form>
      </div>
    );
  }
}

export default Country;

