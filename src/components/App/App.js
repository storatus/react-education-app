import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';


import { Grid,Row,Col } from 'react-bootstrap';





class App extends Component {
  render() {
    return (
      // This might change because I have to do things responsive
      <div className="App">
        <Header/>
        <div className="row">
          <Sidebar/>
          <div className="col-md-10">
            <Grid>
              <Row className="show-grid">
                <Col xs={12} md={8}>
                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed arcu ornare, ornare erat eget, scelerisque arcu. Suspendisse sodales urna non massa commodo, at euismod sapien consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec congue tortor non malesuada convallis. Nulla neque sapien, vehicula at porttitor vitae, gravida nec magna. In arcu tortor, commodo eget dolor et, viverra aliquam odio. Nam in blandit felis, ac dapibus ex. Vivamus a sem odio. Aliquam aliquet nisl ut aliquet ullamcorper. Duis id luctus quam, a fermentum sem. Quisque auctor justo a erat gravida interdum. In hac habitasse platea dictumst.
Sed aliquet commodo tellus at convallis. Aenean sollicitudin ex a mattis finibus. Praesent non magna libero. Aliquam dignissim venenatis turpis, vitae pellentesque tortor mattis non. Mauris suscipit purus magna, vitae sodales libero aliquet sit amet. Nunc volutpat nec quam at imperdiet. Mauris lacinia est et neque condimentum feugiat. Ut vulputate sit amet nisl nec ornare. Nulla malesuada eros at magna maximus posuere. Donec rhoncus ultricies justo et feugiat.
Nullam ac tortor vitae neque dapibus eleifend. Vestibulum a augue sed dolor dictum suscipit sed quis justo. Ut congue eros a consequat feugiat. Donec dictum tortor eget velit posuere iaculis. Duis tristique non lectus et malesuada. Cras elementum enim non porta convallis. Suspendisse in tellus metus.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed blandit arcu lectus, nec dapibus ipsum tristique vel. Praesent nec luctus dui, id tristique elit. Nulla ipsum orci, tincidunt pretium lacus ac, fringilla hendrerit augue. Nam ante augue, blandit eget suscipit vel, ornare nec leo. Proin quis sem sed nunc posuere bibendum. Vivamus vestibulum porta est et pharetra. Nulla pellentesque molestie tristique. Mauris sed sagittis velit, a vehicula nisl. Duis sem libero, sollicitudin nec arcu consectetur, feugiat consectetur sapien. Praesent interdum gravida purus ut bibendum. Nulla accumsan blandit dui in viverra. Donec lacinia non tellus malesuada eleifend. Nunc leo purus, sollicitudin sit amet metus sed, facilisis sollicitudin sapien. Proin efficitur, velit in pulvinar rutrum, eros neque tincidunt mauris, vel vestibulum leo erat vitae mauris.
Morbi ultricies gravida dolor id suscipit. Nulla placerat lacinia eros vel iaculis. Aenean sit amet mauris egestas, hendrerit elit vel, finibus sem. Proin turpis massa, efficitur et rhoncus a, iaculis at urna. Pellentesque nec urna nisl. Donec pulvinar ut tortor et aliquam. In eu massa commodo, aliquam dolor at, condimentum turpis. Aliquam placerat vel nisl ac accumsan. Integer sodales nisi quis nisl varius, in scelerisque velit sagittis. Duis vel nulla hendrerit, commodo felis sed, laoreet neque. Nunc nisl neque, viverra tincidunt nibh vehicula, porta ullamcorper nisl. In gravida nunc sed ultrices hendrerit. </p>

                </Col>
                <Col xs={6} md={4}>
                  <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed arcu ornare, ornare erat eget, scelerisque arcu. Suspendisse sodales urna non massa commodo, at euismod sapien consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec congue tortor non malesuada convallis. Nulla neque sapien, vehicula at porttitor vitae, gravida nec magna. In arcu tortor, commodo eget dolor et, viverra aliquam odio. Nam in blandit felis, ac dapibus ex. Vivamus a sem odio. Aliquam aliquet nisl ut aliquet ullamcorper. Duis id luctus quam, a fermentum sem. Quisque auctor justo a erat gravida interdum. In hac habitasse platea dictumst.
    Sed aliquet commodo tellus at convallis. Aenean sollicitudin ex a mattis finibus. Praesent non magna libero. Aliquam dignissim venenatis turpis, vitae pellentesque tortor mattis non. Mauris suscipit purus magna, vitae sodales libero aliquet sit amet. Nunc volutpat nec quam at imperdiet. Mauris lacinia est et neque condimentum feugiat. Ut vulputate sit amet nisl nec ornare. Nulla malesuada eros at magna maximus posuere. Donec rhoncus ultricies justo et feugiat.
    Nullam ac tortor vitae neque dapibus eleifend. Vestibulum a augue sed dolor dictum suscipit sed quis justo. Ut congue eros a consequat feugiat. Donec dictum tortor eget velit posuere iaculis. Duis tristique non lectus et malesuada. Cras elementum enim non porta convallis. Suspendisse in tellus metus.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed blandit arcu lectus, nec dapibus ipsum tristique vel. Praesent nec luctus dui, id tristique elit. Nulla ipsum orci, tincidunt pretium lacus ac, fringilla hendrerit augue. Nam ante augue, blandit eget suscipit vel, ornare nec leo. Proin quis sem sed nunc posuere bibendum. Vivamus vestibulum porta est et pharetra. Nulla pellentesque molestie tristique. Mauris sed sagittis velit, a vehicula nisl. Duis sem libero, sollicitudin nec arcu consectetur, feugiat consectetur sapien. Praesent interdum gravida purus ut bibendum. Nulla accumsan blandit dui in viverra. Donec lacinia non tellus malesuada eleifend. Nunc leo purus, sollicitudin sit amet metus sed, facilisis sollicitudin sapien. Proin efficitur, velit in pulvinar rutrum, eros neque tincidunt mauris, vel vestibulum leo erat vitae mauris.
    Morbi ultricies gravida dolor id suscipit. Nulla placerat lacinia eros vel iaculis. Aenean sit amet mauris egestas, hendrerit elit vel, finibus sem. Proin turpis massa, efficitur et rhoncus a, iaculis at urna. Pellentesque nec urna nisl. Donec pulvinar ut tortor et aliquam. In eu massa commodo, aliquam dolor at, condimentum turpis. Aliquam placerat vel nisl ac accumsan. Integer sodales nisi quis nisl varius, in scelerisque velit sagittis. Duis vel nulla hendrerit, commodo felis sed, laoreet neque. Nunc nisl neque, viverra tincidunt nibh vehicula, porta ullamcorper nisl. In gravida nunc sed ultrices hendrerit. </p>
                </Col>
              </Row>
            </Grid>
          </div>

        </div>

      </div>)




  }
}

export default App;
