import React, { Component } from 'react';
import css from './Dropdawn.module.css';
class Dropdawn extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    return (
      <div className={css.Dropdawn}>
        <button
          type="button"
          className={css.Dropdawn__toggle}
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>
        {this.state.visible && (
          <div className={css.Dropdawn__menu}>Выпадающие меню</div>
        )}
      </div>
    );
  }
}
export default Dropdawn;
