import React, { Component } from 'react';
import css from './Colorpicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 4,
  };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };
  makeOptionClassName = index => {
    const optionClasses = [css.ColorPicker__option];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push(css.www);
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className={css.ColorPicker}>
        <h2 className={css.ColorPickertitle}>Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div className={css.qqq}>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
