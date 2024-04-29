import { Icon } from "@components/icon";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { GoBackButton, HeaderContainer, ScreenName } from "./styles";

type HeaderProps = {
  screenName: string;
};

export function Header({ screenName }: HeaderProps) {
  const navigation = useNavigation();
  const theme = useTheme();

  function goBack() {
    navigation.goBack();
  }

  return (
    <HeaderContainer>
      <ScreenName>{screenName}</ScreenName>
      <GoBackButton onPress={goBack}>
        <Icon name="arrow-left" size={24} color={theme.COLORS.GRAY_200} />
      </GoBackButton>
    </HeaderContainer>
  );
}
