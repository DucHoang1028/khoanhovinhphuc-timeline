import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollSection } from "@/components/ScrollSection";
import { HistoricalTooltip } from "@/components/HistoricalTooltip";
import { TimelineModal } from "@/components/TimelineModal";
import { Quiz } from "@/components/Quiz";
import ChatAssistant from "@/components/ChatAssistant";
import { Calendar, TrendingUp, XCircle, CheckCircle, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";
import achievementsImage from "@/assets/achievements.jpg";
import reformImage from "@/assets/reform.jpg";

const Index = () => {
  const [timelineOpen, setTimelineOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Khoán Hộ Vĩnh Phúc 1968
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Một Sáng Kiến Đi Trước Thời Đại
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
            onClick={() => setTimelineOpen(true)}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Xem Timeline
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <ScrollSection className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ra đời như thế nào?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Năm 1968, trong bối cảnh nông nghiệp tập thể đang gặp nhiều khó khăn, năng suất thấp và đời sống nông dân túng thiếu, đồng chí Kim Ngọc - Bí thư Tỉnh ủy Vĩnh Phúc đã có một sáng kiến đột phá.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ông đề xuất thí điểm hình thức "khoán sản phẩm đến hộ" - cho phép các hộ nông dân được tự chủ trong sản xuất, tự quyết định cách canh tác và được hưởng thành quả từ công sức của mình sau khi hoàn thành nghĩa vụ với hợp tác xã và nhà nước.
              </p>
            </div>
            <div className="flex justify-center">
              <HistoricalTooltip />
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Achievements Section */}
      <ScrollSection delay={200} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={achievementsImage}
                alt="Thành quả"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">
                  Thành quả đạt được
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Năng suất tăng vượt bậc</h3>
                    <p className="text-muted-foreground">
                      Năng suất lúa tăng từ 20-30%, một số vùng đạt hơn 40% so với trước khi áp dụng khoán hộ.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Đời sống cải thiện</h3>
                    <p className="text-muted-foreground">
                      Thu nhập của nông dân tăng đáng kể, nhiều hộ gia đình thoát nghèo, đời sống vật chất và tinh thần được nâng cao.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Động lực sản xuất</h3>
                    <p className="text-muted-foreground">
                      Nông dân có quyền tự chủ, tích cực hơn trong canh tác, chủ động đầu tư cải tiến kỹ thuật.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Rejection Section */}
      <ScrollSection delay={300} className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="bg-destructive/10 p-3 rounded-lg">
                <XCircle className="h-8 w-8 text-destructive" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Vì sao không được chấp nhận?
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Tư tưởng giáo điều</h3>
              <p className="text-muted-foreground">
                Bị coi là đi ngược lại con đường xã hội chủ nghĩa, vi phạm nguyên tắc kinh tế tập thể mà Đảng đang theo đuổi.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Lo ngại phục hồi tư bản</h3>
              <p className="text-muted-foreground">
                Cho rằng khoán hộ sẽ tạo ra sự chênh lệch giàu nghèo, dẫn đến nguy cơ phục hồi chủ nghĩa tư bản trong nông thôn.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Áp lực chính trị</h3>
              <p className="text-muted-foreground">
                Áp lực từ cấp trên và từ những người bảo thủ trong bộ máy khiến mô hình này bị đình trệ và ngừng triển khai.
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Misconceptions Section */}
      <ScrollSection delay={400} className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Những nhận thức sai lầm của Đảng
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-destructive">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Tuyệt đối hóa mô hình kinh tế tập thể
              </h3>
              <p className="text-muted-foreground">
                Cho rằng chỉ có kinh tế tập thể mới là con đường đúng đắn, không nhìn nhận được tính hiệu quả của các hình thức kinh tế khác phù hợp với điều kiện thực tế.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-destructive">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Áp đặt mô hình, không xuất phát từ thực tiễn
              </h3>
              <p className="text-muted-foreground">
                Áp dụng máy móc các mô hình từ nước ngoài mà không xem xét đến đặc điểm, điều kiện cụ thể của Việt Nam, bỏ qua tính sáng tạo từ cơ sở.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-destructive">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Thiếu niềm tin vào nhân dân
              </h3>
              <p className="text-muted-foreground">
                Lo ngại rằng nếu cho nông dân tự chủ sẽ dẫn đến tình trạng mất kiểm soát, trong khi thực tế đã chứng minh nông dân hoàn toàn có khả năng tự quản lý và phát triển kinh tế.
              </p>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Correction Section */}
      <ScrollSection delay={500} className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Đảng đã sửa sai như thế nào?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Chỉ thị 100-CT/TW (1981)</h3>
                    <p className="text-muted-foreground">
                      Đảng ban hành Chỉ thị về cải tiến khoán trong hợp tác xã, thừa nhận hiệu quả của khoán sản phẩm đến hộ - bước đầu sửa sai quan trọng.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Đại hội VI của Đảng (1986)</h3>
                    <p className="text-muted-foreground">
                      Khởi xướng công cuộc Đổi Mới, chuyển sang kinh tế thị trường định hướng xã hội chủ nghĩa, đánh dấu bước ngoặt trong tư duy kinh tế.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Nghị quyết 10-NQ/TW (1988)</h3>
                    <p className="text-muted-foreground">
                      Chính thức công nhận và phổ biến khoán hộ rộng rãi, cho phép nông dân tự chủ trong sản xuất - thành công của việc sửa sai.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Nghị quyết 68-NQ/TW (2025)</h3>
                    <p className="text-muted-foreground">
                      Khơi thông động lực phát triển kinh tế tư nhân Việt Nam
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
            <div>
              <img
                src={reformImage}
                alt="Cải cách"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Conclusion Section */}
      <ScrollSection delay={600} className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gradient mb-6">
            Bài học lịch sử
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Câu chuyện khoán hộ Vĩnh Phúc 1968 là minh chứng cho sức mạnh của sáng kiến từ cơ sở và tầm quan trọng của việc xuất phát từ thực tiễn. Đảng Cộng sản Việt Nam đã thể hiện bản lĩnh chính trị khi dám nhìn nhận sai lầm và sửa sai kịp thời, đưa đất nước vượt qua khủng hoảng và phát triển bền vững.
          </p>
          <p className="text-lg text-muted-foreground italic">
            "Thực tiễn là tiêu chuẩn của chân lý"
          </p>
        </div>
      </ScrollSection>

      {/* Quiz Section */}
      <ScrollSection delay={700} className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Kiểm tra kiến thức
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trắc nghiệm về Tư tưởng Hồ Chí Minh và lịch sử Đảng Cộng sản Việt Nam
            </p>
          </div>
          <Quiz />
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Khoán Hộ Vĩnh Phúc 1968 - Nghiên cứu lịch sử
          </p>
        </div>
      </footer>

      <TimelineModal open={timelineOpen} onOpenChange={setTimelineOpen} />
      
      <ChatAssistant />
    </div>
  );
};

export default Index;
