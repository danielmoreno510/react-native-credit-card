import React, {useState, useEffect} from "react";
import { View, Image } from "react-native";

import { defaultCreditCard, defaultCreditCardDate, defaultCreditCardCcv } from "../../../utils/formUtils";
import Text from "../CustomText";
import styles from "./styles";

const CustomCreditCard = ({name, number, date, ccv, rotate}) => {
  const [scale, setScale] = useState(0);
  const [isRotate, setIsRotate] = useState(false);

  const originCard = () => {
    setTimeout(() => {setScale(170)}, 20);
    setTimeout(() => {setScale(160)}, 40);
    setTimeout(() => {setScale(150)}, 60);
    setTimeout(() => {setScale(140)}, 80);
    setTimeout(() => {setScale(130)}, 100);
    setTimeout(() => {setScale(120)}, 120);
    setTimeout(() => {setScale(110)}, 140);
    setTimeout(() => {setScale(100)}, 160);
    setTimeout(() => {setScale(90)}, 180);
    setTimeout(() => {setIsRotate(false)}, 180);
    setTimeout(() => {setScale(80)}, 200);
    setTimeout(() => {setScale(70)}, 220);
    setTimeout(() => {setScale(60)}, 240);
    setTimeout(() => {setScale(50)}, 260);
    setTimeout(() => {setScale(40)}, 280);
    setTimeout(() => {setScale(30)}, 300);
    setTimeout(() => {setScale(20)}, 320);
    setTimeout(() => {setScale(10)}, 340);
    setTimeout(() => {setScale(0)}, 360);
  }

  const rotateCard = () => {
    setTimeout(() => {setScale(10)}, 20);
    setTimeout(() => {setScale(20)}, 40);
    setTimeout(() => {setScale(30)}, 60);
    setTimeout(() => {setScale(40)}, 80);
    setTimeout(() => {setScale(50)}, 100);
    setTimeout(() => {setScale(60)}, 120);
    setTimeout(() => {setScale(70)}, 140);
    setTimeout(() => {setScale(80)}, 160);
    setTimeout(() => {setScale(90)}, 180);
    setTimeout(() => {setIsRotate(true)}, 180);
    setTimeout(() => {setScale(100)}, 200);
    setTimeout(() => {setScale(110)}, 220);
    setTimeout(() => {setScale(120)}, 240);
    setTimeout(() => {setScale(130)}, 260);
    setTimeout(() => {setScale(140)}, 280);
    setTimeout(() => {setScale(150)}, 300);
    setTimeout(() => {setScale(160)}, 320);
    setTimeout(() => {setScale(170)}, 340);
    setTimeout(() => {setScale(180)}, 360);
  }

  useEffect(() => {
    rotate ? rotateCard() : originCard()
  }, [rotate]);

  return (
    <View
      style={[
        styles.container,
        isRotate && { padding: 0, paddingTop: 14 },
        { transform: [{ rotateY: `${scale}deg` }] },
      ]}
    >
      <View style={styles.content}>
        {!isRotate ? (
          <View>
            <View style={styles.firstSection}>
              <View style={styles.images}>
                <Image
                  style={styles.firstImage}
                  source={require("../../../../assets/chip.png")}
                />
                <Image
                  style={styles.secondImage}
                  source={require("../../../../assets/conectless.png")}
                />
              </View>
              <Text style={styles.creditCard}>Credit Card</Text>
            </View>
            <Text style={styles.number}>{defaultCreditCard(number)}</Text>
            <View style={styles.secondSection}>
              <Text style={styles.name} bold>
                {name === "" ? "YOUR NAME HERE" : name}
              </Text>
              <View>
                <Text style={styles.validThru}>Valid thru</Text>
                <Text style={styles.date}>{defaultCreditCardDate(date)}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.ccvSection}></View>
            <View style={styles.ccvContent}>
              <View style={styles.lines}>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
              </View>
              <Text
                style={[
                  styles.ccv,
                  { transform: [{ rotateY: `${scale}deg` }] },
                ]}
              >
                {defaultCreditCardCcv(ccv)}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default CustomCreditCard;
