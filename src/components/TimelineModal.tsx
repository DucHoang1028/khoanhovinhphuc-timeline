import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimelineModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timelineEvents = [
  {
    year: "1968",
    title: "Ra đời khoán hộ tại Vĩnh Phúc",
    description: "Dưới sự lãnh đạo của đồng chí Kim Ngọc, Tỉnh ủy Vĩnh Phúc thí điểm hình thức khoán sản phẩm đến hộ nông dân. Đây là sáng kiến đột phá trong bối cảnh nông nghiệp tập thể đang gặp nhiều khó khăn.",
  },
  {
    year: "1969-1970",
    title: "Thành quả ban đầu",
    description: "Năng suất lúa tăng 20-30%, thu nhập của nông dân cải thiện đáng kể. Nhiều hộ gia đình thoát nghèo, đời sống vật chất và tinh thần được nâng cao.",
  },
  {
    year: "1971-1975",
    title: "Sự phản đối và đình trệ",
    description: "Khoán hộ bị coi là 'tư bản chủ nghĩa', đi ngược lại chủ trương kinh tế tập thể. Áp lực từ Trung ương khiến mô hình này bị ngừng triển khai.",
  },
  {
    year: "1976-1979",
    title: "Những nhận thức sai lầm",
    description: "Đảng cho rằng khoán hộ phá vỡ tính tập thể, tạo ra sự chênh lệch giàu nghèo, và nguy cơ phục hồi chủ nghĩa tư bản. Tư tưởng giáo điều, áp đặt mô hình đã cản trở sự phát triển.",
  },
  {
    year: "1980-1981",
    title: "Khủng hoảng lương thực",
    description: "Nông nghiệp tập thể không hiệu quả, sản xuất đình trệ, đất nước đối mặt với tình trạng thiếu lương thực nghiêm trọng. Thực tế buộc phải tìm giải pháp mới.",
  },
  {
    year: "1981",
    title: "Chỉ thị 100-CT/TW",
    description: "Đảng ban hành Chỉ thị về cải tiến khoán trong hợp tác xã nông nghiệp, thừa nhận hiệu quả của khoán sản phẩm. Đây là bước đầu sửa sai quan trọng.",
  },
  {
    year: "1986",
    title: "Đổi Mới toàn diện",
    description: "Đại hội VI của Đảng khởi xướng công cuộc Đổi Mới, chính thức công nhận và phát triển kinh tế thị trường định hướng xã hội chủ nghĩa.",
  },
  {
    year: "1988",
    title: "Nghị quyết 10-NQ/TW",
    description: "Khoán hộ chính thức được công nhận và phổ biến rộng rãi. Nông dân được quyền tự chủ trong sản xuất, đánh dấu thành công của việc sửa sai.",
  },
  {
    year: "2025",
    title: "Nghị quyết 68-NQ/TW",
    description: "Xác lập vị thế chiến lược của kinh tế tư nhân từ vị trí là “một động lực quan trọng” trở thành “động lực quan trọng nhất của nền kinh tế quốc gia”",
  },
];

export const TimelineModal = ({ open, onOpenChange }: TimelineModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Dòng thời gian: Khoán hộ Vĩnh Phúc 1968
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(85vh-120px)] pr-4">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-8 pb-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-sm">
                      {event.year}
                    </span>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
