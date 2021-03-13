import React, { Fragment, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Header from "../common/CustomHeader";
import CreditCard from "../common/CustomCreditCard";
import Input from "../common/CustomInput";
import {
  validateCreditCard,
  validateCreditCardDate,
  validateCreditCardCcv
} from "../../utils/formUtils";
import styles from "./styles";

const CreateCard = () => {
  const [rotate, setRotate] = useState(false);
  const [creditCard, setCreditCard] = useState({
    name: "",
    number: "",
    date: "",
    ccv: "",
  });

  const [placeholder, setPlaceholder] = useState({
    name: "Card Name",
    number: "Card Number",
    date: "MM/YY",
    ccv: "CCV",
  });

  const changeCreditCard = (newValue) => {
    setCreditCard((oldValue) => ({ ...oldValue, ...newValue }));
  };

  const changePlaceholder = (newValue) => {
    setPlaceholder((oldValue) => ({ ...oldValue, ...newValue }));
  };

  return (
    <Fragment>
      <SafeAreaView style={styles.statusBar} />
      <Header title={"Create Card"} goMenu={() => {}} />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <KeyboardAwareScrollView>
            <View style={styles.creditCard}>
              <CreditCard
                name={creditCard.name}
                number={creditCard.number}
                date={creditCard.date}
                ccv={creditCard.ccv}
                rotate={rotate}
              />
            </View>
            <View style={styles.form}>
              <Input
                style={[styles.textInput]}
                value={creditCard.name}
                placeholder={placeholder.name}
                onChangeText={(value) => changeCreditCard({ name: value })}
                onFocus={() => changePlaceholder({ name: "" })}
                onBlur={() => changePlaceholder({ name: "Card Name" })}
                secureTextEntry={false}
              />
              <Input
                style={[styles.textInput]}
                value={creditCard.number}
                placeholder={placeholder.number}
                onChangeText={(value) =>
                  validateCreditCard(value) !== false &&
                  changeCreditCard({ number: validateCreditCard(value) })
                }
                onFocus={() => changePlaceholder({ number: "" })}
                onBlur={() => changePlaceholder({ number: "Card Number" })}
                keyboardType={"numeric"}
                secureTextEntry={false}
              />
              <Input
                style={[styles.textInput]}
                value={creditCard.date}
                placeholder={placeholder.date}
                onChangeText={(value) =>
                  validateCreditCardDate(value) !== false &&
                  changeCreditCard({ date: validateCreditCardDate(value) })
                }
                onFocus={() => changePlaceholder({ date: "" })}
                onBlur={() => changePlaceholder({ date: "MM/YY" })}
                secureTextEntry={false}
                keyboardType={"numeric"}
              />
              <Input
                style={[styles.textInput]}
                value={creditCard.ccv}
                placeholder={placeholder.ccv}
                onChangeText={(value) =>
                  validateCreditCardCcv(value) &&
                  changeCreditCard({ ccv: value })
                }
                onFocus={() => (
                  changePlaceholder({ ccv: "" }), setRotate(true)
                )}
                onBlur={() => (
                  changePlaceholder({ ccv: "CCV" }), setRotate(false)
                )}
                secureTextEntry={false}
                keyboardType={"numeric"}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default CreateCard;
