import {FC, useEffect, useRef, useState} from 'react';
import {Data, HomeScreenProps} from './types';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import styles from './styles.ts';
import {data} from './data.ts';
import {shuffleArray} from '../../utils/shuffleArray.ts';
import {useBoolean} from '../../hooks';
import Modal from '../../components/Modal';
import {RootStackParams} from '../../navigation/StackNavigation.tsx';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/routes.ts';
import {HelpCircleIcon} from '../../assets/icons';

const MediumLevelScreen: FC<HomeScreenProps> = () => {
  const [images, setImages] = useState<Data[]>();
  const [set, setSet] = useState<0 | 1 | 2>(0);
  const [isFinish, setIsFinish] = useBoolean(false);
  const {navigate} = useNavigation<NavigationProp<RootStackParams>>();

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setImages(shuffleArray(data));
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Contador incrementa cada segundo (1000 milisegundos)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }; // Detenemos el contador al desmontar el componente
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  const handleStop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const setImageVisible = (index: number) => {
    setImages(prevImages => {
      const updatedImages = [...prevImages];
      updatedImages[index] = {
        ...updatedImages[index],
        visible: true,
      };
      return updatedImages;
    });
  };

  const setPairFound = (index: number) => {
    return images?.map(image => {
      if (image.key === images[index].key) {
        return {
          ...image,
          found: true,
          visible: true,
        };
      }
      return image;
    });
  };

  const anotherPairVisible = (index: number) => {
    return images?.find(
      image =>
        image.visible &&
        image.key === images[index].key &&
        image.id !== images[index].id,
    );
  };

  const getImagesFound = (imagesUpload?: Data[]) =>
    imagesUpload?.filter(image => image.found);

  const handlePress = async (index: number) => {
    setImageVisible(index);

    if (set === 0) {
      setSet(1);
      return;
    } else {
      if (anotherPairVisible(index)) {
        const imagesUpload = setPairFound(index);
        setImages(imagesUpload);

        if (getImagesFound(imagesUpload)?.length === images?.length) {
          setIsFinish.on();
          handleStop();
        }
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setImages(images?.map(image => ({...image, visible: image.found})));
      }
      setSet(0);
    }
  };

  const renderItem = ({item, index}: {item: Data; index: number}) => (
    <TouchableOpacity
      disabled={item.found || item.visible}
      style={styles.item}
      onPress={() => handlePress(index)}>
      {item.visible ? (
        <Image source={item.image} style={styles.image} />
      ) : (
        <HelpCircleIcon
          width={'100%'}
          height={'100%'}
          style={styles.imageHidden}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.content}>
      <FlatList
        keyExtractor={(item, index) => `${index}-${item.id}`}
        numColumns={2}
        data={images}
        renderItem={renderItem}
      />
      <Modal
        active={isFinish}
        setActive={setIsFinish}
        actionLeftButton={() => navigate(Routes.HOME)}
        actionRightButton={() => navigate(Routes.HOME)}
        title={'Felicidades!!!!'}
        message={`Ha ganadado y tardate ${count} segundos`}
      />
    </View>
  );
};

export default MediumLevelScreen;
