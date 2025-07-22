import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const questions = [
  {
    question: 'Which country shares borders with France, Belgium, and Denmark?',
    options: ['Germany', 'Netherlands', 'Luxembourg', 'Switzerland'],
  },
  {
    question: 'Which country borders both the United States and Guatemala?',
    options: ['Mexico', 'Canada', 'Honduras', 'El Salvador'],
  },
  {
    question: 'Which country is surrounded by South Africa?',
    options: ['Lesotho', 'Botswana', 'Namibia', 'Zimbabwe'],
  },
  {
    question: 'Which country borders China, India, and Nepal?',
    options: ['Bhutan', 'Pakistan', 'Myanmar', 'Bangladesh'],
  },
  {
    question: 'Which country has borders with only Brazil and Argentina?',
    options: ['Uruguay', 'Paraguay', 'Chile', 'Bolivia'],
  },
];

const QuizStartScreen = () => {
  const [isTimerBonus, setIsTimerBonus] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizStarted(false);
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <View style={styles.container}>
      {quizStarted ? (
        <View style={styles.quizContainer}>
          <Text style={styles.quizTitle}>Question {currentQuestionIndex + 1}</Text>
          <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.answerButton}>
              <Text style={styles.answerText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Card style={styles.card}>
          <Text style={styles.category}>Geography & Travel</Text>
          <Text style={styles.title}>Guess the Country by Its Neighbors Quiz</Text>
          <TouchableOpacity style={styles.startButton} onPress={() => setQuizStarted(true)}>
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
          <View style={styles.optionsRow}>
            <Text style={styles.optionText}>20 Questions</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.optionText}>Timer Bonus</Text>
              <Switch value={isTimerBonus} onValueChange={setIsTimerBonus} />
            </View>
          </View>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  category: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  startButton: {
    backgroundColor: '#002D62',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  optionText: {
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quizContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    width: '90%',
  },
  quizTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  answerText: {
    color: 'white',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuizStartScreen;