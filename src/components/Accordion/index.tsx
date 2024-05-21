import {ListItem} from '@rneui/themed';
import {FC, PropsWithChildren, ReactElement} from 'react';
import styles from './styles';
import {StyleProp, ViewStyle} from 'react-native';

type AccordionProps = {
  title: string;
  icon: ReactElement;
  expanded?: boolean;
  setExpanded?: {toggle: () => void; off: () => void; on: () => void};
  containerStyle?: StyleProp<ViewStyle>;
};

const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
  title,
  icon,
  expanded,
  setExpanded,
  containerStyle,
  children,
  ...props
}) => {
  return (
    <ListItem.Accordion
      {...props}
      containerStyle={containerStyle || styles.container}
      onPress={() => setExpanded?.toggle()}
      content={
        <ListItem.Content style={styles.contentTitle}>
          {icon}
          <ListItem.Title style={styles.title}>{title}</ListItem.Title>
        </ListItem.Content>
      }
      isExpanded={expanded}
      noIcon>
      {children}
    </ListItem.Accordion>
  );
};

export default Accordion;
