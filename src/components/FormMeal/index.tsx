import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { Button } from '@components/Button'

import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import theme from '@theme/index'
import { formatDate, formatHour } from '@utils/validate'

type Fields = 'name' | 'description' | 'date' | 'hour' | 'isDiet'

const defaultValuesInputs = {
  name: '',
  description: '',
  date: '',
  hour: '',
  isDiet: true,
}

const formMealSchema = z.object({
  name: z.string(),
  description: z.string(),
  date: z.string(),
  hour: z.string(),
  isDiet: z.boolean(),
})

export type FormMealData = z.infer<typeof formMealSchema>

interface IFormMeal {
  textButton: string
  onSubmitFunction: (inputs: FormMealData) => void
  inputs?: FormMealData
}

export function FormMeal({
  textButton,
  onSubmitFunction,
  inputs = defaultValuesInputs,
}: IFormMeal) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormMealData>({
    defaultValues: {
      name: inputs.name,
      description: inputs.description,
      date: inputs.date,
      hour: inputs.hour,
      isDiet: inputs.isDiet,
    },
  })

  const withinTheDietButtonStyles = watch('isDiet')
    ? styles.withinTheDietButton
    : styles.isDietInputDefault

  const offTheDietButtonStyles = !watch('isDiet')
    ? styles.offTheDietButton
    : styles.isDietInputDefault

  function onRenderInput(nameField: Fields, maxLength: number) {
    return (
      <Controller
        control={control}
        name={nameField}
        rules={{
          required: true,
          maxLength,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors[nameField] && styles.errorInput]}
            onBlur={onBlur}
            autoCorrect={false}
            onChangeText={onChange}
            value={value.toString()}
            placeholder={errors[nameField] && 'Campo obrigatório'}
            placeholderTextColor={theme.COLORS.RED_DARK}
            maxLength={maxLength}
          />
        )}
      />
    )
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nome</Text>
        {onRenderInput('name', 20)}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Descrição</Text>
        {onRenderInput('description', 50)}
      </View>

      <View style={styles.inputDateContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.inputLabel}>Data</Text>
          <Controller
            control={control}
            name={'date'}
            rules={{
              required: true,
              maxLength: 10,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.date && styles.errorInput]}
                onBlur={onBlur}
                autoCorrect={false}
                keyboardType="numeric"
                onChangeText={(newText) => onChange(formatDate(newText))}
                value={value}
                placeholder={errors.date ? 'Campo obrigatório' : 'DDMMAAAA'}
                placeholderTextColor={
                  errors.date ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_300
                }
                maxLength={10}
              />
            )}
          />
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.inputLabel}>Hora</Text>
          <Controller
            control={control}
            name={'hour'}
            rules={{
              required: true,
              maxLength: 5,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, errors.hour && styles.errorInput]}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={(newText) => onChange(formatHour(newText))}
                value={value}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === 'Backspace') {
                    return onChange(value.substring(0, value.length - 1))
                  }
                }}
                placeholder={errors.hour ? 'Campo obrigatório' : 'MMHH'}
                placeholderTextColor={
                  errors.hour ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_300
                }
                maxLength={5}
              />
            )}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Está dentro da dieta?</Text>

        <View style={styles.buttonsIsDietContainer}>
          <Controller
            name="isDiet"
            control={control}
            rules={{ required: false }}
            render={({ field: { onChange } }) => (
              <Pressable
                onPress={() => onChange(true)}
                style={[styles.isDietInput, withinTheDietButtonStyles]}
              >
                <View style={[styles.iconIsDiet, styles.iconWithinTheDiet]} />
                <Text style={styles.isDietText}>Sim</Text>
              </Pressable>
            )}
          />

          <Controller
            name="isDiet"
            control={control}
            rules={{ required: false }}
            render={({ field: { onChange } }) => (
              <Pressable
                onPress={() => onChange(false)}
                style={[styles.isDietInput, offTheDietButtonStyles]}
              >
                <View style={[styles.iconIsDiet, styles.offTheDiet]} />
                <Text style={styles.isDietText}>Não</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
      <SafeAreaView style={styles.buttonFormMealContainer}>
        <Button
          onPressFunction={handleSubmit(onSubmitFunction)}
          text={textButton}
        />
      </SafeAreaView>
    </>
  )
}
