import { Component } from '@angular/core';
import { NavigationCancellationCode } from '@angular/router';
import Validator from 'validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-data-binding';
  inputPlaceHolder = "text placeholder";
  isButtonDisable = false;
  x = 0
  y = 0
  switchButtonClicks = 0
  validationError = ""
  email = null
  persons = [
    {
      name: "natali",
      age: 25
    },
    {
      name: "Ilana",
      age: 20
    },
    {
      name: "gena",
      age: 15
    }
  ]
  selectValue = "full"

  buttonEnableClasses = {
    "red": this.isButtonDisable,
    "green": !this.isButtonDisable
  }

  switchingColors = {
    "yellow": this.switchButtonClicks === 1,
    "red-border": this.switchButtonClicks === 2,
    "red-text": this.switchButtonClicks === 3
  }

  validation = {
    "red-border": !!this.validationError
  }

  getTitle =()=>{
    return this.title
  }

  onClickButtonDisable = () => {
    this.isButtonDisable = !this.isButtonDisable
    this.buttonEnableClasses = {
      "red": this.isButtonDisable,
      "green": !this.isButtonDisable
    }
  }

  onInput = (event: Event) => {
    const text: string = (event.target as HTMLInputElement).value;
    if (text.length > 0) {
      this.title = text;
      this.isButtonDisable = false
    }
    else {
      this.title = 'angular-data-binding';
      this.isButtonDisable = true
    }
  }

  onMouseMove = (event: MouseEvent) => {
    console.log(event)
    this.x = event.offsetX
    this.y = event.offsetY
  }

  onSwitchButton = () => {
    if (this.switchButtonClicks === 3) this.switchButtonClicks = 0
    else this.switchButtonClicks++

    this.switchingColors = {
      "yellow": this.switchButtonClicks >= 1,
      "red-border": this.switchButtonClicks >= 2,
      "red-text": this.switchButtonClicks === 3
    }
  }

  checkEmailValidation = (event: Event) => {
    if (!Validator.isEmail((event.target as HTMLInputElement).value))
      this.validationError = "email invalid"
    else this.validationError = ''

    this.validation = {
      "red-border": !!this.validationError
    }
  }

  newMessage = ""
  messages = new Array<string>()

  addNewMessage = (inputValue: string) => {
    // this.messages.push(this.newMessage)
    this.messages.push(inputValue)
    this.newMessage = ""
  }


  onChangeSelect = (event: Event) => {
    this.selectValue = (event.target as HTMLSelectElement).value
  }

}
