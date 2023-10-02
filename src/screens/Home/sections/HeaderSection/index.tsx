import { Image, View } from 'react-native'

import Logo from '../../../../../assets/Logo.svg'
import { styles } from './styles'

interface IHeaderSection {
  imageUrl: string
}

export function HeaderSection({ imageUrl }: IHeaderSection) {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />

      <Image
        source={{
          uri: imageUrl,
        }}
        width={55}
        height={55}
        style={styles.imageProfile}
        alt="Profile"
      />
    </View>
  )
}
