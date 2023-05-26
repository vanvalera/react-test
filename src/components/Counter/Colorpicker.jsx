import React, { Component } from 'react';
import css from './Colorpicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 4,
  };

  makeOptionClassName = index => {
    const optionClasses = [css.ColorPicker__option];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push(css.www);
    }
    return optionClasses.join(' ');
  };

  render() {
    return (
      <div className={css.ColorPicker}>
        <h2 className={css.ColorPickertitle}>Color Picker</h2>
        <div className={css.qqq}>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                className={optionClassName}
                style={{
                  backgroundColor: color,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
