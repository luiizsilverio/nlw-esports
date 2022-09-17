import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between'
  },
  logo: {
    width: 72,
    height: 40
  },
  vazio: {
    width: 20,
    height: 20
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32
  },
  containerList: {
    width: '100%',
  },
  contentList: {
    paddingLeft: 16,
    paddingRight: 48,
    alignItems: 'flex-start',
  },
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  }
});