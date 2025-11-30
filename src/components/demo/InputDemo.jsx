import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
export function InputDemo() {
  return (
    <>
      <div className="w-64">
        <Label htmlFor="name">Name</Label>
        <Input placeholder="Enter text here" className="mb-2" />
        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="Input email" disabled />
        <Label htmlFor="email">Email444</Label>
        <Input type="email" placeholder="Input email" />
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" className="mb-2" />
        <Button type="submit" variant="outline">
          Subscribe
        </Button>
      </div>
    </>
  )
}
