import React from 'react';

interface ButtonProps {
  /**
   * ボタンに表示されるテキスト
   */
  label: string;
  /**
   * ボタンの背景色
   */
  color?: string;
  /**
   * ボタンをクリックした時の処理
   */
  onClick: () => void;
}

/**
 * シンプルなボタンコンポーネント
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  color = "#1ea7fd",
  onClick,
}) => {
  return (
    <button
      type="button"
      style={{
        fontSize: "14px",
        padding: "8px 16px",
        border: "none",
        borderRadius: "3em",
        cursor: "pointer",
        display: "inline-block",
        lineHeight: 1,
        color: 'white',
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
