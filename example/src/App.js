import React, { Component } from "react";
import {
  OverflowWrapper,
  TextMessage,
  TextWithMedia,
  CarouselWithButtons,
  // Offers,
  // RechargeHistory,
  CheckboxWithMedia,
  FormMessage,
  ListMessage,
  SeatMap,
  UploadFile,
  UploadedDocument
} from "@oriserve-chatbot/message-types";

import {
  textMessage,
  formMessage,
  textWithMediaMessage,
  checkboxMessage,
  carouselWithButtonsMessage,
  carouselMenu,
  seatMapMessage,
  uploadMessage,
  message,
  uploadedDocumentMessage
} from "./constants";

export default class App extends Component {
  render() {
    return (
      <div className="ori-appContainer">
        {/* <OverflowWrapper enabled>
          <TextMessage
            message={textMessage}
            show_nlp_snapshot={false}
            preferLang="hindi"
          />
        </OverflowWrapper> */}
        {/* <ListMessage message={message} /> */}
        <TextWithMedia message={textWithMediaMessage} preferLang="hindi" />
        {/* <CheckboxWithMedia message={checkboxMessage} preferLang="hindi"/> */}
        {/* <DishtvRecharge message={message} /> */}
        {/* <DishtvRechargeDetails message={message} /> */}
        {/* <UploadFile message={uploadMessage} /> */}
        {/* <Offers message={message} handleOfferSelection={()=>{}} btn_disabled /> */}
        {/* <RechargeHistory message={message} /> */}
        {/* <CarouselWithButtons
          message={carouselWithButtonsMessage}
          img_popup_disable={false}
          preferLang="hindi"
        /> */}
        {/* <CarouselWithButtons
          message={carouselMenu}
        /> */}
        {/* <FormMessage message={formMessage} /> */}
        {/* <SeatMap message={seatMapMessage} preferLang="hindi" /> */}
        {/* <UploadedDocument message={uploadedDocumentMessage}/> */}
      </div>
    );
  }
}
