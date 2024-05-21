import {FC} from 'react';
import {useThemedStyles} from '../../hooks';
import {Button, Container, Dialog} from '../index.ts';
import {createStyles} from './styles.ts';

interface ModalProps {
  id?: string;
  accessibilityLabel?: string;
  title?: string;
  message?: string;
  active: boolean;
  setActive: {off: any};
  actionLeftButton: () => void;
  actionRightButton: () => void;
}

const Modal: FC<ModalProps> = ({
  id,
  accessibilityLabel,
  title,
  message,
  active,
  setActive,
  actionLeftButton,
  actionRightButton,
}) => {
  const [styles] = useThemedStyles(createStyles);

  return (
    <Dialog
      id={id}
      accessibilityLabel={accessibilityLabel}
      title={title}
      message={message}
      onClose={setActive.off}
      visible={active}
      style={styles.modal}
      styleMessage={styles.message}>
      <Container style={styles.container}>
        <Button
          accessibilityLabel="btn-confirm"
          onPress={actionLeftButton}
          buttonStyle={styles.confirm}
          containerStyle={styles.containerConfirm}>
          Volver a menu
        </Button>
        <Button
          accessibilityLabel="btn-confirm"
          onPress={actionLeftButton}
          buttonStyle={styles.cancel}
          containerStyle={styles.containerCancel}>
          Ranking
        </Button>
      </Container>
    </Dialog>
  );
};

export default Modal;
