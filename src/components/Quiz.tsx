import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; value: string }[];
  correctAnswer: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Theo Tư tưởng Hồ Chí Minh, mục đích hoạt động cao cả và duy nhất của Đảng Cộng sản Việt Nam là gì?",
    options: [
      { label: "A. Giành độc lập dân tộc, củng cố quyền lực cho giai cấp vô sản.", value: "A" },
      { label: "B. Lãnh đạo đấu tranh giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp, giải phóng con người.", value: "B" },
      { label: "C. Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa.", value: "C" },
      { label: "D. Xây dựng Đảng trở thành lực lượng quân sự mạnh nhất trong khu vực.", value: "D" },
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "Luận điểm nào của Chủ tịch Hồ Chí Minh đã khái quát bản chất và mục tiêu cao cả của Đảng Cộng sản Việt Nam?",
    options: [
      { label: "A. Không có gì quý hơn độc lập, tự do.", value: "A" },
      { label: "B. Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.", value: "B" },
      { label: "C. Đảng ta là đạo đức, là văn minh.", value: "C" },
      { label: "D. Đoàn kết, đoàn kết, đại đoàn kết.", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 3,
    question: "Trong hệ thống đạo đức 'Cần, Kiệm, Liêm, Chính, Chí công vô tư,' Hồ Chí Minh định nghĩa 'Liêm' là gì?",
    options: [
      { label: "A. Siêng năng, chăm chỉ, lao động có năng suất cao.", value: "A" },
      { label: "B. Thẳng thắn, đúng đắn, trung thực, ngay thẳng.", value: "B" },
      { label: "C. Trong sạch, không tham lam, không hám lợi, không tham ô.", value: "C" },
      { label: "D. Đặt lợi ích của tập thể, của dân tộc lên trên lợi ích cá nhân.", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 4,
    question: "Theo Hồ Chí Minh, tự phê bình và phê bình có vai trò như thế nào đối với Đảng?",
    options: [
      { label: "A. Là biện pháp đối phó với kẻ thù bên ngoài.", value: "A" },
      { label: "B. Là cơ sở để xác định cán bộ có năng lực chuyên môn.", value: "B" },
      { label: "C. Là 'vũ khí sắc bén' nhằm làm cho Đảng trong sạch, vững mạnh.", value: "C" },
      { label: "D. Là cơ sở để phân bổ ngân sách nhà nước.", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 5,
    question: "Hồ Chí Minh gọi những biểu hiện tiêu cực như tham nhũng, lãng phí, quan liêu, cục bộ, chủ nghĩa cá nhân trong bộ máy Nhà nước là gì?",
    options: [
      { label: "A. Giặc ngoại xâm.", value: "A" },
      { label: "B. Tệ nạn xã hội.", value: "B" },
      { label: "C. 'Giặc nội xâm' hoặc 'căn bệnh' phải tiêu diệt.", value: "C" },
      { label: "D. Sai lầm cá nhân không đáng kể.", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 6,
    question: "Về mục tiêu cuối cùng của Chủ nghĩa xã hội ở Việt Nam, Hồ Chí Minh xác định đó là một xã hội như thế nào?",
    options: [
      { label: "A. Xã hội chỉ có sở hữu toàn dân, không còn sở hữu tập thể.", value: "A" },
      { label: "B. Xã hội tiến lên trình độ khoa học kỹ thuật cao hơn tư bản chủ nghĩa.", value: "B" },
      { label: "C. Độc lập, tự do, hạnh phúc cho mọi người, không còn người bóc lột người.", value: "C" },
      { label: "D. Xã hội chỉ tập trung phát triển công nghiệp nặng.", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 7,
    question: "Một trong những đặc điểm nổi bật nhất của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam được Hồ Chí Minh xác định là gì?",
    options: [
      { label: "A. Phải trải qua giai đoạn phát triển tư bản chủ nghĩa.", value: "A" },
      { label: "B. Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không trải qua giai đoạn phát triển tư bản chủ nghĩa.", value: "B" },
      { label: "C. Từ một nước công nghiệp phát triển tiến lên xã hội chủ nghĩa.", value: "C" },
      { label: "D. Xây dựng nền tảng chỉ dựa vào công nghiệp hiện đại.", value: "D" },
    ],
    correctAnswer: "B",
  },
  {
    id: 8,
    question: "Theo Tư tưởng Hồ Chí Minh, lực lượng nền tảng (cột gốc) của khối đại đoàn kết toàn dân tộc là gì?",
    options: [
      { label: "A. Chỉ bao gồm tất cả các đảng phái chính trị.", value: "A" },
      { label: "B. Sự liên minh giữa các tôn giáo và các dân tộc thiểu số.", value: "B" },
      { label: "C. Liên minh công nhân - nông dân - trí thức dưới sự lãnh đạo của Đảng.", value: "C" },
      { label: "D. Lực lượng quân đội nhân dân và công an nhân dân.", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 9,
    question: "Theo Hồ Chí Minh, nhân tố nào được coi là 'vốn quý nhất,' nhân tố quyết định thành công của sự nghiệp cách mạng?",
    options: [
      { label: "A. Tài nguyên thiên nhiên phong phú.", value: "A" },
      { label: "B. Công nghiệp và nông nghiệp hiện đại.", value: "B" },
      { label: "C. Con người.", value: "C" },
      { label: "D. Vũ khí và sức mạnh quân sự.", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 10,
    question: "Nguyên tắc căn bản trong việc xây dựng Nhà nước của dân, do dân, vì dân theo Tư tưởng Hồ Chí Minh là gì?",
    options: [
      { label: "A. Quyền lực tập trung vào các cơ quan quyền lực cao nhất.", value: "A" },
      { label: "B. Tất cả mọi quyền lực đều thuộc về nhân dân.", value: "B" },
      { label: "C. Phân chia quyền lực tuyệt đối giữa các ngành lập pháp, hành pháp, tư pháp.", value: "C" },
      { label: "D. Đảng là người đại diện duy nhất thực hiện quyền lực.", value: "D" },
    ],
    correctAnswer: "B",
  },
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: value,
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const isAnswerCorrect = (questionIndex: number) => {
    return selectedAnswers[questionIndex] === quizQuestions[questionIndex].correctAnswer;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / quizQuestions.length) * 100;

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <h3 className="text-3xl font-bold text-center mb-6 text-foreground">Kết quả kiểm tra</h3>
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-primary mb-4">
              {score}/{quizQuestions.length}
            </div>
            <p className="text-xl text-muted-foreground">
              Bạn đã trả lời đúng {percentage.toFixed(0)}% câu hỏi
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {quizQuestions.map((q, index) => (
              <div
                key={q.id}
                className={`p-4 rounded-lg border-2 ${
                  isAnswerCorrect(index)
                    ? "border-primary bg-primary/5"
                    : "border-destructive bg-destructive/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  {isAnswerCorrect(index) ? (
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-2">Câu {q.id}: {q.question}</p>
                    <p className="text-sm text-muted-foreground">
                      Câu trả lời của bạn: <span className={isAnswerCorrect(index) ? "text-primary font-semibold" : "text-destructive font-semibold"}>{selectedAnswers[index] || "Chưa trả lời"}</span>
                    </p>
                    {!isAnswerCorrect(index) && (
                      <p className="text-sm text-primary mt-1">
                        Đáp án đúng: <span className="font-semibold">{q.correctAnswer}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleReset} size="lg" className="gap-2">
              <RotateCcw className="h-5 w-5" />
              Làm lại bài kiểm tra
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-muted-foreground">
            Câu hỏi {currentQuestion + 1} / {quizQuestions.length}
          </span>
          <span className="text-sm font-semibold text-primary">{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-lg p-8 border border-border mb-6">
        <h3 className="text-2xl font-bold mb-6 text-foreground">{question.question}</h3>

        <RadioGroup
          value={selectedAnswers[currentQuestion] || ""}
          onValueChange={handleAnswerSelect}
          className="space-y-4"
        >
          {question.options.map((option) => (
            <div
              key={option.value}
              className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-accent/50 ${
                selectedAnswers[currentQuestion] === option.value
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              <RadioGroupItem value={option.value} id={`q${question.id}-${option.value}`} />
              <Label
                htmlFor={`q${question.id}-${option.value}`}
                className="flex-1 cursor-pointer text-foreground leading-relaxed"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex justify-between items-center">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          variant="outline"
          size="lg"
        >
          Câu trước
        </Button>

        {currentQuestion === quizQuestions.length - 1 ? (
          <Button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length !== quizQuestions.length}
            size="lg"
          >
            Nộp bài
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={!selectedAnswers[currentQuestion]}
            size="lg"
          >
            Câu tiếp theo
          </Button>
        )}
      </div>
    </div>
  );
};
